// 'use client'

// import { useRef, useState } from 'react'
// import emailjs from '@emailjs/browser'
// import { useForm } from 'react-hook-form'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Button } from '@/components/ui/button'

// export default function ContactForm() {
//   const formRef = useRef<HTMLFormElement>(null)
//   const [isLoading, setIsLoading] = useState(false)
//   const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = async () => {
//     if (!formRef.current) return
//     setIsLoading(true)
//     setStatus('idle')

//     try {
//       await emailjs.sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         formRef.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       )
//       setStatus('success')
//       reset()
//     } catch (error) {
//       console.error(error)
//       setStatus('error')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         <div className="space-y-2">
//           <Input
//             placeholder="Nom"
//             {...register('user_name', { required: 'Nom requis' })}
//             name="user_name"
//           />
//           {errors.user_name && (
//             <p className="text-sm text-destructive">{errors.user_name.message as string}</p>
//           )}
//         </div>
//         <div className="space-y-2">
//           <Input
//             placeholder="Email"
//             type="email"
//             {...register('user_email', { required: 'Email requis' })}
//             name="user_email"
//           />
//           {errors.user_email && (
//             <p className="text-sm text-destructive">{errors.user_email.message as string}</p>
//           )}
//         </div>
//       </div>
//       <div className="space-y-2">
//         <Input
//           placeholder="Sujet"
//           {...register('subject', { required: 'Sujet requis' })}
//           name="subject"
//         />
//         {errors.subject && (
//           <p className="text-sm text-destructive">{errors.subject.message as string}</p>
//         )}
//       </div>
//       <div className="space-y-2">
//         <Textarea
//           placeholder="Message"
//           className="min-h-[120px]"
//           {...register('message', { required: 'Message requis' })}
//           name="message"
//         />
//         {errors.message && (
//           <p className="text-sm text-destructive">{errors.message.message as string}</p>
//         )}
//       </div>
//       <Button type="submit" className="w-full" disabled={isLoading}>
//         {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
//       </Button>

//       {status === 'success' && (
//         <p className="text-green-600 text-sm text-center">Message envoyé avec succès ✅</p>
//       )}
//       {status === 'error' && (
//         <p className="text-red-600 text-sm text-center">Erreur lors de l’envoi ❌</p>
//       )}
//     </form>
//   )
// }



// components/ContactForm.tsx
'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        'service_u4moq37',    // <- à remplacer sevice
        'template_v7jt6ge',   // <- à remplacer template
        form.current!,
        'I7OlfrfM6irRoh533'     // <- à remplacer public
      )
      .then(
        () => {
          setStatus('success')
          form.current?.reset()
        },
        (error) => {
          console.error(error)
          setStatus('error')
        }
      )
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label className="block mb-1 font-medium">Nom</label>
        <input type="text" name="user_name" required className="w-full border p-2 rounded" />
      </div>
      <div>
        <label className="block mb-1 font-medium">Email</label>
        <input type="email" name="user_email" required className="w-full border p-2 rounded" />
      </div>
      <div >
        <label className="block mb-1 font-medium">Objet</label>
        <input
        type='text'
          className="w-full border p-2 rounded" name="subject" required
        />
        {/* {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject.message as string}</p>
        )} */}
      </div>
      <div>
        <label className="block mb-1 font-medium">Message</label>
        <textarea name="message" required rows={5} className="w-full border p-2 rounded" />
      </div>
      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Envoi...' : 'Envoyer'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 mt-2">Message envoyé avec succès ✅</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 mt-2">Erreur lors de l’envoi ❌</p>
      )}
    </form>
  )
}
