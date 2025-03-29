
import InputForm from '../../UI/InputForm/InputForm'
import style from './FormEntry.module.scss'
import {useForm} from 'react-hook-form'

const FormEntry = () => {
  const serverUrl = 'https://clanner-server.onrender.com/api'
  const tg = window.Telegram?.WebApp;
  const initData = tg?.initData || '';
  
  const {register, handleSubmit} = useForm()

  const onSubmit =  async (data) => {
    try {
      const response = await fetch(`${serverUrl}/declaration/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({initData, data})
      })
      const result = await response.json();
      if(!response.ok){
        tg.showAlert(result.message)
        throw new Error(result.message || `Ошибка запроса. Статус: ${response.status}`)
      }
      tg.showAlert('✅ Ваша заявка успешно отправлена!');
    } catch (error) {
      console.error(error)
      tg.showAlert('❌ Произошла ошибка при отправке формы');
    }
  };


  return (
    <div className={style.formWrapper}>
    <div className={style.labelForm}>Форма на вступление</div>
    <form className={style.formEntry} onSubmit={handleSubmit(onSubmit)}>
      <InputForm label='Имя:' {...register('firstName')} placeholder='Ваше имя'/>
      <InputForm label='Никнейм:' {...register('nickname')} placeholder='Ник персонажа'/>
      <InputForm label='Класс персонажа:' {...register('charProfile')} placeholder='Класс персонажа'/>
      <div className={style.formGroup}>
        <InputForm label='ПА:' {...register('PA')} placeholder='ПА'/>
        <InputForm label='ПЗ:' {...register('PZ')} placeholder='ПЗ'/>
        <InputForm label='БД:' {...register('FS')} placeholder='БД'/>
      </div>
      <InputForm label='Cсылка на калькулятор:' {...register('charLink')} placeholder='Ссылка на персонажа'/>
      <InputForm label='Ранее импользуемые никнеймы:' {...register('nicknameHistory')} placeholder='Прошлые ники'/>
      <InputForm label='Прошлые кланы:' {...register('clanHistory')} placeholder='Прошлые кланы'/>
      <InputForm label='Почему именно к нам:' {...register('message')} placeholder='Почему именно к нам'/>
      
      <button className={style.button} type='submit'>Отправить</button>
    </form>
    </div>
  )
}

export default FormEntry