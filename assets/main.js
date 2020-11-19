const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

const colors = ['red', 'green', 'blue'];

const icon_types = [];

icons.forEach((icon) => {
    const {type} = icon;

    if (!icon_types.includes(type)) {
        icon_types.push(type);
    }
});

icon_types.forEach((type) => {
    $('#icons-filter').append(`
        <option value="${type}">${type}</option>
    `);
});

$('#icons-filter').change(() => {
    const select_type = $('#icons-filter').val();

    $('#icons-container').empty();

    if (select_type != '') {
        const chosen_icons = icons.filter((icon) => {
            return select_type == icon.type;
        });

        chosen_icons.forEach((icon) => {
            print_icon(icon);
        });
    } else {
        print_all_icons(icons);
    }
});

print_all_icons(icons);

function print_all_icons(icons_array) {
    icons_array.forEach((icon) => {
        print_icon(icon);
    });
}

function print_icon(icon) {
    const {name, prefix, family, type} = icon;

    const type_index = icon_types.indexOf(type);

    const icon_color = colors[type_index];

    $('#icons-container').append(`
        <div class="icon">
            <i class="${family} ${prefix}${name} fa-2x" style="color:${icon_color}"></i>
            <p>${name}</p>
        </div>
    `);
}
