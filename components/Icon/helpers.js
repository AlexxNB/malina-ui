export function resolveSource(src){
    if(!!src && /\.[a-z]{3,4}$/i.test(src)) {
		return 'image';
	} else if(!!src && /\.svg#/i.test(src)) {
		return 'sprite';
	} else if(!!src) {
		return 'path';
	}
}

export function getStyles(size,color,flipV,flipH,rotate) {

    const transform = [];
    const styles = [];

    if(Number(size)) size = Number(size);

    if (size !== 1) {
        const width = (typeof size === "string") ? size : `${size*1.6}em`;
        styles.push(['width',width]);
        styles.push(['height',width]);
    }

    if (color) styles.push(['fill', color]);

    if (flipH) {
        transform.push("scaleX(-1)");
    }
    if (flipV) {
        transform.push("scaleY(-1)");
    }
    
    if (rotate != 0) {
        transform.push(`rotate(${rotate}deg)`);

    }

    if(transform.length > 0) {
        styles.push( ['transform', transform.join(' ')] );
    }

    return styles.reduce((cur,item)=>{
        return `${cur} ${item[0]}:${item[1]};`;
    },'');
}

export function getSpin(spin){

    spin = spin === true ? 2 : Number(spin);

    const spObj = {
        active: false,
        CW: false,
        CCW: false,
        style: undefined
    }

    if(spin !== 0 && !isNaN(spin)){
        spObj.active = true;
        spObj.style = `animation-duration: ${Math.abs(spin)}s`;
        spin < 0 ? spObj.CCW=true : spObj.CW=true;
    }
    
	return spObj
}