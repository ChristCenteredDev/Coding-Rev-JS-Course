
(function GetLooser() {
    this.applicants = [];

    this.init = function(){
        this.addApplicants();
        this.getRandomUser();
        this.runAgain();
        this.startOver();
    };


    this.showList = function(){
        var parent = document.querySelector('.applicant_list_wrapper');
        var template = '';

        for(var i = 0; i < applicants.length; i++) {
            template += '<span class="name-tag" data-id="'+ i +'">' + applicants[i] + '</span>'
        }

        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);
        deleteOne();

    };

    this.addApplicants = function(){
        function generateList(input){
            var value = input.value;

            if(this.checkValid(value)){
                applicants.push(value);
                input.value = '';
                showList();
            }else{
                alert('Something is not right')
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
        // Add event listener
        var addBtn = document.querySelector('#add_applicant');

        addBtn.addEventListener('click',function(e){
            var input = document.querySelector('#applicant_value');
            generateList(input);
        });
    };

    this.checkValid = function(value){
        if(applicants.indexOf(value) < 0 && value != ''){
            return true
        }
        return false;
    };

    this.deleteOne = function(){
        var item = document.querySelectorAll('.name-tag');
        function removeIt(element){
            var attr = parseInt(element.getAttribute('data-id'));

            applicants.splice(attr,1);
            showList();
        }

        for (var i = 0; i < item.length; i++) {
            item[i].addEventListener('click', function(e) {
                removeIt(this);
            });
        }
    };

    this.getRandomUser = function(){
        var resultsButton = document.querySelector('#show_results');

        function showLooser(){
            var resultsContainer = document.querySelector('.results_container');
            var aplicantContainer = document.querySelector('.applicant_container');

            aplicantContainer.className += ' hidden';
            resultsContainer.className = 'results_container';

            showRandomUser();
        }

        resultsButton.addEventListener('click',function(e){
            if(applicants.length > 0){
                showLooser();
            }
        });
    };

    this.showRandomUser = function(){
        var resultContainer = document.querySelector('.result');
        var rand = applicants[Math.floor(Math.random() * applicants.length)];

        resultContainer.innerHTML = '';
        resultContainer.insertAdjacentHTML('afterbegin', '<h3>'+ rand +'</h3>');
    };

    this.runAgain = function(){
        var runAgainBtn = document.querySelector('.run_again');

        runAgainBtn.addEventListener('click',function(e){
            showRandomUser();
        });
    };

    this.startOver = function(){
        var startAgainBtn = document.querySelector('.start_again');

        startAgainBtn.addEventListener('click',function(e){
            var resultsContainer = document.querySelector('.results_container');
            var aplicantContainer = document.querySelector('.applicant_container');
            var aplicantWrapper = document.querySelector('.applicant_list_wrapper');

            aplicantContainer.className = 'applicant_container';
            resultsContainer.className = 'results_container hidden';
            aplicantWrapper.innerHTML = '';

            applicants = [];
        });
    };

    this.init();
})();