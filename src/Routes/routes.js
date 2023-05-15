import Facebook from "../pages/Facebook";
import SignIn from "../pages/SignIn";
import MainRoot from "../MainRoot";

export const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                path: 'facebook',
                element: <Facebook />

            },
            {
                path: '',
                element: <SignIn />
            }
        ]
    }
]