
import InputForm from '../../UI/InputForm/InputForm'
import style from './FormEntry.module.scss'
import {useForm} from 'react-hook-form'

const FormEntry = () => {

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
    <div className={style.labelForm}>Заявка на вступление</div>
    <form className={style.formEntry} onSubmit={handleSubmit(onSubmit)}>
      <InputForm label='Имя:' {...register('firstName')}/>
      <InputForm label='Никнейм:' {...register('nickname')}/>
      <InputForm label='Класс персонажа:' {...register('charProfile')}/>
      <div className={style.formGroup}>
        <InputForm label='ПА:' {...register('PA')}/>
        <InputForm label='ПЗ:' {...register('PZ')}/>
        <InputForm label='БД:' {...register('FS')}/>
      </div>
      <InputForm label='Cсылка на калькулятор:' {...register('charLink')}/>
      <InputForm label='Ранее импользуемые никнеймы:' {...register('nicknameHistory')}/>
      <InputForm label='Прошлые кланы:' {...register('clanHistory')}/>
      <InputForm label='Почему именно к нам:' {...register('message')}/>
      <button className={style.button} type='submit'>Отправить</button>
    </form>
    </>
  )
}

export default FormEntry