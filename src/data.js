export const API_KEY = 'AIzaSyDyIQvQol4l3cg4LAt6tUaWrKs5l5frU28';

export const value_converter = (value) =>{
    if(value >= 1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value >= 1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}