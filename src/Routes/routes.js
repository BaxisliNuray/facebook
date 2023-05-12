import Facebook from "../Facebook";
import Root from "../Root";

export const ROUTES = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Facebook />   

            }
        ]
    }
]