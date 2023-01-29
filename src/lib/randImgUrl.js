/**
 *
 *
 * @export
 * @param {number} [width=1024]
 * @param {number} [height=1024]
 * @param {number} [offset=100]
 * @return {*} 
 */
export default function randImgUrl( width = 1024, height = 1024, offset = 100 ) {
	const randomNumber = Math.ceil(Math.random() * offset);
	const ratio = height / width;
	return `https://picsum.photos/${width + randomNumber}/${height + randomNumber * ratio}`;
}
