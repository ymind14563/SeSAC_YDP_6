import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onValid = (data) => {
        console.log('onValid >>>>> ', data);
    };

    const onInValid = (err) => {
        console.log('onInValid >>>>> ', err);
    };

    return (
        <div>
            <h1>react-hook-form 실습</h1>
            <form onSubmit={handleSubmit(onValid, onInValid)}>
                <input
                    type="text"
                    placeholder="name"
                    {...register('name', {
                        required: '이름은 필수 항목입니다.'
                    })}
                />
                {errors.name?.message}
                <br />

                <input
                    type="number"
                    placeholder="age(0 이상)"
                    {...register('age', {
                        required: '0이상 숫자만 입력 가능합니다.',
                        validate: {
                            overZero: (v) =>
                                v > 0 ||
                                '0이상 숫자만 입력 가능합니다.',
                        },
                    })}
                />
                {errors.age?.message}
                <br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}