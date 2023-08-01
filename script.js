//your JS code here. If required.
    function resolveForm() {
      const nameInput = document.getElementById("name");
      const ageInput = document.getElementById("age");
      const age = parseInt(ageInput.value);

      if (!ageInput.value || !nameInput.value) {
        alert("Please enter valid details");
        return;
      }

      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve();
          } else {
            reject();
          }
        }, 3000);
      });

      promise
        .then(() => {
          alert(`Welcome, ${nameInput.value}. You can vote.`);
          // You can perform additional actions on successful resolution here
        })
        .catch(() => {
          alert(`Oh sorry ${nameInput.value}. You aren't old enough.`);
          // You can perform additional actions on rejection here
        });
    }

    const button = document.getElementById("btn");
    button.addEventListener("click", resolveForm);




