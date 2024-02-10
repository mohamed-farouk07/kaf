function toggleElementClass(target, elClass, htmlClass) {
    target = document.querySelector(target);
    if (target) {
        if (target.classList.contains(elClass)) {
            target.classList.remove(elClass);
            document.documentElement.classList.remove(htmlClass);
        } else {
            target.classList.add(elClass);
            document.documentElement.classList.add(htmlClass);
        }

    }
}