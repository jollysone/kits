// switch sidebar
$('.item').click(function() {
    console.log(1111);
    // var tab = $(this).data('tab')


    $(this).addClass('current').siblings('.item').removeClass('current');
});

var icon = {
    'github' : './list/git/github.svg',
    'gitlab' : './list/git/gitlab.svg'
};

var git = [
    {
        'icon' : icon.github,
        'primary' : 'github',
        'secondary' : 'deve-1',
    },
    {
        'icon' : icon.gitlab,
        'primary' : 'gitlab',
        'secondary' : 'deve-2',
    },
];








var list;
for (i in git) {
    list +=
    `<div class="entry">
        <div class="icon web">
            <img src="{i.icon}" alt="github">
        </div>
        <div class="description">
            <div class="primary">github</div>
            <div class="secondary">deve-1</div>
        </div>
    </div>`
}

$('.item').html(list)
