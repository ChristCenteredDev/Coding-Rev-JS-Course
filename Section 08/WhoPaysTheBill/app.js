

(function GetLoser() {
    this.applicants = [];

    this.init = function () {
        this.addApplicants();
    };

    this.addApplicants = function () {

        function generateList(input) {
            var value = input.value;

            if (validateUser(value)) {
                applicants.push(value);
                input.value = "";
                showList();

            } else {

                document.querySelector("#error").style.display = "block";
                setTimeout(function () {
                    document.querySelector("#error").style.display = "none";
                }, 2000);

            }


        }

        function showList() {
            var parent = document.querySelector('.applicant_list_wrapper');
            var template = '';

            for (var i = 0; i < applicants.length; i++) {
                template += '<span class="name-tag" data-id="' + i + '">' + applicants[i] + '</span>'
            }

            parent.innerHTML = '';
            parent.insertAdjacentHTML('afterbegin', template);
            deleteOne();

        }



        var addBtn = document.querySelector("#add_applicant");

        addBtn.addEventListener("click", function () {
            var input = document.querySelector("#applicant_value");
            generateList(input);
        });


    };

    this.validateUser = function (value) {
        if (applicants.indexOf(value) >= 0 || value == '') {
            return false;
        }

        return true;
    }

    this.init();
})();


