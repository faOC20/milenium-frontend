import Bolivares from '@icons/paymentMethods/bolivares.svg'
import Dolares from '@icons/paymentMethods/dolares.svg'
import PagoMovil from '@icons/paymentMethods/pagomovil.svg'
import PuntoVenta from '@icons/paymentMethods/puntodeventa.svg'
import Transferencia from '@icons/paymentMethods/transferencia.svg'
import Zelle from '@icons/paymentMethods/zelle.svg'
import Biopago from '@icons/paymentMethods/biopago.svg'

export const PAYMENTS_METHODS  = [
    {
        id:'4',
        payment_method_name: 'tarjeta',
        icon: PuntoVenta
        
    },
    {
        id:'2',
        payment_method_name: 'efectivo',
        icon: Bolivares
        
        
    },
    {
        id:'3',
        payment_method_name: 'divisas',
        icon: Dolares
        
        
    },

    {
        id:'7',
        payment_method_name: 'Biopago',
        icon: Biopago
        
    },
    
    {
        id:'5',
        payment_method_name: 'pago-movil',
        icon: PagoMovil
        
        
    },
    {
        id:'1',
        payment_method_name: 'transferencia',
        icon: Transferencia
        
        
    },
    
    
    
   
    {
        id:'6',
        payment_method_name: 'zelle',
        icon: Zelle
        
    },

    
]