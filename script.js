<script>
     var tablinks = document.getElementByClassName("tab-links")
     var tabcontents = document.getElementByClassName("tab-contents")
     function opentab(tabname){
        for(tablink of  tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of  tabcontents){
            tabcontent.classList.remove("active-tab")
        }
     }
    


     <i class=" fa-solid fa-xmark"></i> 
     <i class="fa-solid fa-bars"></i>


     #header{
        background-image: url() ;}