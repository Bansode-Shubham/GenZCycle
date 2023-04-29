import { USER } from "./User";
export const POST =[
    {
        imageUri:'https://media.istockphoto.com/id/1340571998/photo/man-rides-a-bike-outdoors-in-the-park-on-a-sunny-day-at-sunset.jpg?b=1&s=170667a&w=0&k=20&c=2kpssLbHrNJEQVZ8lVWxuw5MEYDk9afMLv1lY1OEL3Q=',
        user :USER[0].user,
        likes:4,
        caption:'Life is like a box of chocolates; sometimes you just dig out the good center parts and leave all the undesirable rest to waste. ',
        profile_picture:USER[0].image,
        badge:USER[0].badge,
        dailyKm:USER[0].dailyKm,


        
        comments:[
            {
                user:'theawesome',
                comment:'KDK re bhai '
            },
            {
                user:'gviuybiug',
                comment:'fcytcvytv'
            }
        ]


    },
    {
        imageUri:'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        user :USER[1].user,
        likes:324,
        caption:'There is no such thing as a perfect person, but someone’s heart can have a perfect intention. ',
        profile_picture:USER[1].image,
        badge:USER[1].badge,
        dailyKm:USER[1].dailyKm,

        comments:[
            {
                user:'theawesome',
                comment:'KDK re bhai '
            },
            {
                user:'Hayri',
                comment:'Awesome'
            }
        ]


    },
    {
        imageUri:'https://images.unsplash.com/photo-1534146789009-76ed5060ec70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=709&q=80',
        user :USER[2].user,
        likes:73,
        caption:'Always Rocks ',
        profile_picture:USER[2].image,
        badge:USER[2].badge,
        dailyKm:USER[2].dailyKm,

        comments:[
            {
                user:'theawesome',
                comment:'KDK re bhai '
            },
            {
                user:'gfctyrcvb',
                comment:'fxdyrcuj gubiubniu'
            }
        ]


    }
]