<template>
    <div>
        <label :for="id">{{titulo}}</label>
        <input 
        class="form-control"
        :id="id"
        :type="type"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @input="$emit('input', $event.target.value)"
        >
        <span v-if="error" class="text-danger">{{mensajeError}}</span>
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        id: {
            type: [Number, String],
            required: true
        },
        titulo: {
            type: String,
            default: ''
        },
        type: {
            type: String, 
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'Ingrese un valor'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        maxlength: {
            tupe: Number,
            default: 100
        },
        error: {
            type: Boolean,
            default: false
        },
        mensajeError: {
            type: String,
            default: 'Campo obligatorio'
        },
        value: {
            type: [Number, String],
            default: ''
        }
    }
}
</script>

<style>

</style>