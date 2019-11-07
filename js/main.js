// window.onscroll=showNav;
// window.onload=showNav;
document.body.className+='js-loading';

window.addEventListener('scroll',showNav);
window.addEventListener('load',showNav);
window.addEventListener('resize',animateAll);
window.addEventListener('load',startAnim);





function startAnim(){
    document.body.className=document.body.className.replace(new RegExp("\\bjs-loading\\b"),"");
    // startImageChanger();
}



var viewport_w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var viewport_h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
function showNav(){
    var navbar=document.getElementById("navbar");
    var navLinks=document.getElementsByClassName("nav-link");
    if(document.body.scrollTop >=viewport_h || document.documentElement.scrollTop >=viewport_h ){
        navbar.style.visibility='visible';
        navbar.style.top="0px";
    }
    if(window.scrollY>=viewport_h){
        navbar.style.visibility='visible';
        navbar.style.top="0px";
    }
    else{
        navbar.style.top='-50px';
    }

    for(var i=0;i<navLinks.length;i++){
        document.getElementById("navbar").style.background='black';
        navLinks[i].className=navLinks[i].className.replace(" link-active","");
    }
    if(window.scrollY >= 0 && window.scrollY < viewport_h){
        document.getElementById("home-btn").className+=" link-active";
    }
    if(window.scrollY >= viewport_h && window.scrollY < (2*viewport_h)){
        document.getElementById("profile-btn").className+=" link-active";
    }
    if(window.scrollY >= (2*viewport_h) && window.scrollY < (3*viewport_h)){
        document.getElementById("navbar").style.background='transparent';
        document.getElementById("education-btn").className+=" link-active";
    }
    if(window.scrollY >= (3*viewport_h) && window.scrollY < (4*viewport_h)){
        document.getElementById("navbar").style.background='transparent';
        document.getElementById("skills-btn").className+=" link-active";
    }
    if(window.scrollY >= (4*viewport_h) && window.scrollY < (5*viewport_h)){
        document.getElementById("projects-btn").className+=" link-active";
    }

    animateAll();

}
function animateAll(){

    var second_sec_anim_els=document.querySelectorAll(".second-section-animation-off");
    for(var i=0;i<second_sec_anim_els.length;i++){
        var disFromTop=second_sec_anim_els[i].getBoundingClientRect().top;
        if(disFromTop<viewport_h) {
            second_sec_anim_els[i].className = second_sec_anim_els[i].className.replace(new RegExp("\\bsecond-section-animation-off\\b"), "second-section-animation-on");
        }
    }
    second_sec_anim_els=document.querySelectorAll(".second-section-animation-on");
    for(var i=0;i<second_sec_anim_els.length;i++){
        var disFromTop=second_sec_anim_els[i].getBoundingClientRect().top;
        if(disFromTop>=viewport_h) {
            second_sec_anim_els[i].className = second_sec_anim_els[i].className.replace(new RegExp("\\bsecond-section-animation-on\\b"), "second-section-animation-off");
        }
    }

    //animating section headers

    var section_headers=document.querySelectorAll(".section-header-animation-off");
    for(var i=0;i<section_headers.length;i++){
        var disFromTop=section_headers[i].getBoundingClientRect().top;
        if(disFromTop<viewport_h) {
            section_headers[i].className = section_headers[i].className.replace(new RegExp("\\bsection-header-animation-off\\b"), "section-header-animation-on");
        }
    }
    section_headers=document.querySelectorAll(".section-header-animation-on");
    for(var i=0;i<section_headers.length;i++){
        var disFromTop=section_headers[i].getBoundingClientRect().top;
        if(disFromTop>=viewport_h) {
            section_headers[i].className = section_headers[i].className.replace(new RegExp("\\bsection-header-animation-on\\b"), "section-header-animation-off");
        }
    }

    //edu block animations
    var eduBlocks=document.querySelectorAll(".edu-animation-off");
    var delay=0;
    for(var i=0;i<eduBlocks.length;i++){
        var disFromTop=eduBlocks[i].getBoundingClientRect().top;
        if(disFromTop<viewport_h) {
            eduBlocks[i].style.animationDelay=delay+"ms";

            eduBlocks[i].className = eduBlocks[i].className.replace(new RegExp("\\bedu-animation-off\\b"), "edu-animation-on");
            delay+=150;
        }
    }
    eduBlocks=document.querySelectorAll(".edu-animation-on");
    for(var i=0;i<eduBlocks.length;i++){
        var disFromTop=eduBlocks[i].getBoundingClientRect().top;
        if(disFromTop>=viewport_h) {
            eduBlocks[i].className = eduBlocks[i].className.replace(new RegExp("\\bedu-animation-on\\b"), "edu-animation-off");
        }
    }

    delay=150;
    var skills=document.querySelectorAll(".skill-animation-off");
    for(var i=0;i<skills.length;i++){
        var disFromTop=skills[i].getBoundingClientRect().top;
        if(disFromTop<viewport_h) {
            skills[i].style.animationDelay=delay+"ms";

            skills[i].className = skills[i].className.replace(new RegExp("\\bskill-animation-off\\b"), "skill-animation-on");
            delay+=150;
        }
    }
    skills=document.querySelectorAll(".skill-animation-on");
    for(var i=0;i<skills.length;i++){
        var disFromTop=skills[i].getBoundingClientRect().top;
        if(disFromTop>=viewport_h) {
            skills[i].className = skills[i].className.replace(new RegExp("\\bskill-animation-on\\b"), "skill-animation-off");
        }
    }




    var skillBlockHeaders=document.querySelectorAll(".skill-block-header-animation-off");
    for(var i=0;i<skillBlockHeaders.length;i++){
        var disFromTop=skillBlockHeaders[i].getBoundingClientRect().top;
        if(disFromTop<viewport_h) {
            // skillBlockHeaders[i].style.animationDelay=delay+"ms";

            skillBlockHeaders[i].className = skillBlockHeaders[i].className.replace(new RegExp("\\bskill-block-header-animation-off\\b"), "skill-block-header-animation-on");
            // delay+=150;
        }
    }
    skillBlockHeaders=document.querySelectorAll(".skill-block-header-animation-on");
    for(var i=0;i<skillBlockHeaders.length;i++){
        var disFromTop=skillBlockHeaders[i].getBoundingClientRect().top;
        if(disFromTop>=viewport_h) {
            skillBlockHeaders[i].className = skillBlockHeaders[i].className.replace(new RegExp("\\bskill-block-header-animation-on\\b"), "skill-block-header-animation-off");
        }
    }

    delay=150;
    var projects=document.querySelectorAll(".project-animation-off");
    for(var i=0;i<projects.length;i++){
        var disFromTop=projects[i].getBoundingClientRect().top;
        if(disFromTop<viewport_h) {
            projects[i].style.animationDelay=delay+"ms";

            projects[i].className = projects[i].className.replace(new RegExp("\\bproject-animation-off\\b"), "project-animation-on");
            delay+=150;
        }
    }
    projects=document.querySelectorAll(".project-animation-on");
    for(var i=0;i<projects.length;i++){
        var disFromTop=projects[i].getBoundingClientRect().top;
        if(disFromTop>=viewport_h) {
            projects[i].className = projects[i].className.replace(new RegExp("\\bproject-animation-on\\b"), "project-animation-off");
        }
    }


}

