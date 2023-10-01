function vacation(group, type, day) {

    let price = 0;
    let discountPrice = 0;

    switch (type) {
        case 'Students':
            switch (day) {
                case 'Friday': price = group * 8.45;
                break;
                case 'Saturday': price = group * 9.80;
                break;
                case 'Sunday': price = group * 10.46;
                break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday': price = group * 10.90;
                break;
                case 'Saturday': price = group * 15.60;
                break;
                case 'Sunday': price = group * 16;
                break;
            }
            break;
        case 'Regular':
            switch (day) {
                case 'Friday': price = group * 15;
                break;
                case 'Saturday': price = group * 20;
                break;
                case 'Sunday': price = group * 22.50;
                break; 
            }
        break;
    }

    if (group >= 30 && type == 'Students') {
        discountPrice = price * 0.85;
        console.log(`Total price: ${discountPrice.toFixed(2)}`);
    } else if (group >= 100 && type == 'Business') {
        let pricePerNight = price / group;
        discountPrice = (group - 10) * pricePerNight;
        console.log(`Total price: ${discountPrice.toFixed(2)}`);
    } else if (group >= 10 && group <= 20 && type == 'Regular') {
        discountPrice = price * 0.95;
        console.log(`Total price: ${discountPrice.toFixed(2)}`);
    } else {
        console.log(`Total price: ${price.toFixed(2)}`);
    }

}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
vacation(150, "Business", "Friday");