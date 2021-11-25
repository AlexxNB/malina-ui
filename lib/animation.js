export function createAnimation(animation,options){

  options = {
    duration: 350,
    iterations: 1,
    fill: 'both',
    easing: 'ease-in-out',
    ...options
  }

  if(!Array.isArray(animation)) throw Error('Wrong animation argument');

  let control;
  return {

    reverse:()=>{
      control && control.reverse();
    },

    action:(el)=>{
      control =el.animate(animation,options);
      return {
        destroy(){
          control && control.cancel();
          control=null
        }
      }
    }

  }
}