export default function generateKey(pre) {
    return `${pre}_${new Date().getTime()}`;
}