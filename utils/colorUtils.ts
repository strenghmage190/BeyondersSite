export function getContrastColor(hexColor: string): string {
    if (!hexColor || hexColor.length < 4) {
        return '#FFFFFF'; // Padrão para branco em caso de entrada inválida
    }
    
    let r_hex: string, g_hex: string, b_hex: string;

    if (hexColor.length === 4) { // Formato #RGB
        r_hex = hexColor[1] + hexColor[1];
        g_hex = hexColor[2] + hexColor[2];
        b_hex = hexColor[3] + hexColor[3];
    } else if (hexColor.length === 7) { // Formato #RRGGBB
        r_hex = hexColor.substring(1, 3);
        g_hex = hexColor.substring(3, 5);
        b_hex = hexColor.substring(5, 7);
    } else {
        return '#FFFFFF'; // Retorna branco se o formato for inesperado
    }

    const r = parseInt(r_hex, 16);
    const g = parseInt(g_hex, 16);
    const b = parseInt(b_hex, 16);

    // Fórmula de luminância YIQ
    const luminance = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    return (luminance >= 128) ? '#000000' : '#FFFFFF';
}

export function darkenColor(hexColor: string, percent: number): string {
    if (!hexColor || hexColor.length < 4) return '#000000';

    let f = parseInt(hexColor.slice(1), 16), 
        t = percent < 0 ? 0 : 255, 
        p = percent < 0 ? percent * -1 : percent, 
        R = f >> 16, 
        G = (f >> 8) & 0x00FF, 
        B = f & 0x0000FF;
        
    const newR = Math.round((t - R) * p) + R;
    const newG = Math.round((t - G) * p) + G;
    const newB = Math.round((t - B) * p) + B;

    const finalHex = (0x1000000 + newR * 0x10000 + newG * 0x100 + newB).toString(16).slice(1);
    
    return `#${finalHex}`;
}

export function hexToRgb(hex: string): string {
  if (!hex || hex.length < 4) return '156, 39, 176'; // default purple
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '156, 39, 176';
}