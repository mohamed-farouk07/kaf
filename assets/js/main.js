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

window.onload = () => {
  $(".dropdown-menu").on("click", function (event) {
    var events = $._data(document, "events") || {};
    events = events.click || [];
    for (var i = 0; i < events.length; i++) {
      if (events[i].selector) {
        //Check if the clicked element matches the event selector
        if ($(event.target).is(events[i].selector)) {
          events[i].handler.call(event.target, event);
        }

        // Check if any of the clicked element parents matches the
        // delegated event selector (Emulating propagation)
        $(event.target)
          .parents(events[i].selector)
          .each(function () {
            events[i].handler.call(this, event);
          });
      }
    }
    event.stopPropagation(); //Always stop propagation
  });
};


var like_button = document.getElementById("like-button");
if (like_button) {
    like_button.addEventListener("click", doLikeButton);
}

function doLikeButton(e) {
    toggleButton(e.target);
}

function toggleButton(button) {
    button.classList.remove('liked-shaked');
    button.classList.toggle('liked');
    button.classList.toggle('not-liked');
    button.classList.toggle('fa-heart');
    button.classList.toggle('fa-heart');

    if(button.classList.contains("liked")) {
        button.classList.add('liked-shaked');
    }
}


const counters = document.querySelectorAll('[data-counter]');
if (counters) {
  counters.forEach((counter) => {
    counter.addEventListener('click', (e) => {
      const target = e.target;
      if (target.closest('.counter__btn')) {
        let value = parseInt(
          target.closest('.counter').querySelector('input').value
        );
        if (target.classList.contains('counter__btn--plus')) {
          value++;
        } else {
          --value;
        }
        // ---- ---- 0 or another number ---- ---- //
        if (value <= 0) {
          value = 0;
          target
            .closest('.counter')
            .querySelector('.counter__btn--minus')
            .classList.add('disabled');
        } else {
          target
            .closest('.counter')
            .querySelector('.counter__btn--minus')
            .classList.remove('disabled');
        }
        if (value >= 9) {
          value = 9;
          target
            .closest('.counter')
            .querySelector('.counter__btn--plus')
            .classList.add('disabled');
        } else {
          target
            .closest('.counter')
            .querySelector('.counter__btn--plus')
            .classList.remove('disabled');
        }
        target.closest('.counter').querySelector('input').value = value;
      }
    });
  });
}
