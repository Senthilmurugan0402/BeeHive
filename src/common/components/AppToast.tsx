import { Toaster } from 'react-hot-toast';

const AppToast: React.FC = () => {

    return (
        <Toaster
            toastOptions={{
                success: {
                    duration: 3000,
                    style: {
                        border: '1px solid #22AF00',
                        padding: '16px',
                        color: '#313B45',
                        background: '#F1FFF4 0% 0% no-repeat padding-box'
                      },
                      iconTheme: {
                        primary: '#22AF00',
                        secondary: '#FFF',
                      },
                },
                error: {
                    icon:'🚫',
                    style: {
                        border: '1px solid #F84848',
                        padding: '16px',
                        color: '#313B45',
                        background: '#FEF0F0 0% 0% no-repeat padding-box',
                      },
                      iconTheme: {
                        primary: '#F84848',
                        secondary: '#FFF',
                      },
                },
            }}
            containerStyle={{
                top: 50,
                right: 20,
            }}
            position="top-center"
        />
    )
}
export default AppToast;