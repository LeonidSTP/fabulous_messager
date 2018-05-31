
export function jquery() {

  $('.dropdown-toggle').dropdown();
  $('.dropify').dropify();
  $("body").on("click",".btn-duplicator", clone_model);
  $("body").on("click",".btn-remove", remove);
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
//Functions
  function clone_model() {
    var b = $(this).parent(".content").parent(".dropdown-content").parent(".duplicateable-content"),
      c = $(".model").clone(true, true);

    c.removeClass('model');
    c.find('input').addClass('dropify');

    $(b).before(c);
    $('.dropify').dropify();
  }

  function remove() {
    $(this).closest('.duplicateable-content').remove();
  }

}
