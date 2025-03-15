const setVH = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)
}
window.addEventListener('load', setVH);
window.addEventListener('resize', setVH);
document.addEventListener('DOMContentLoaded', () => {
    const handleKeyDown = (event) => {
        if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
            event.preventDefault()
        }
    }
    ;
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('beforeunload', () => {
        window.removeEventListener('keydown', handleKeyDown)
    }
    )
}
);
document.addEventListener('contextmenu', function(e) {
    e.preventDefault()
});
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault()
    }
});
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault()
    }
});
document.addEventListener('selectstart', function(e) {
    e.preventDefault()
});
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault()
    }
})
