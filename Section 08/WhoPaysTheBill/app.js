

(function GetLoser() {
    this.applicants = [];

    this.init = function () {
        this.addApplicants();
    };

    this.addApplicants = function () {

        function generateList(input) {
            var value = input.value;


            //  Modify Below Code

            if (validateUser(value)) {
                applicants.push(value);
                input.value = "";
                console.log(applicants);

            } else {

                document.querySelector("#error").style.display = "block";
                setTimeout(function () {
                    document.querySelector("#error").style.display = "none";
                }, 2000);

            }

            //  Modify Above code


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


