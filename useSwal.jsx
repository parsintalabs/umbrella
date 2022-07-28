import { Inertia } from '@inertiajs/inertia';
import toast from 'react-hot-toast';
import swal from 'sweetalert';

export default function useSwal() {
    const ask = ({
        url,
        message = 'Make sure you make good decisions!',
        method = 'post',
        data = []
    }) => {
        swal({
            // icon: 'warning',
            text: message,
            buttons: ['Nope', 'Yap'],
        }).then((value) => {
            if (value == true) {
                Inertia[method](url, data, {
                    preserveScroll: true,
                    onSuccess: () => toast.success('Done.'),
                });
            }
        });
    };
    return { ask };
}
