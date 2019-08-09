<template>
    <div :class="['input-material', className, required ? 'required': '']">
        <div class="bloc-input">

            <input
                    v-if="!inputTextarea"
                    :class="['input',value ? 'active' : '']"
                    :name="name"
                    :type="typeInput"
                    :value="value"
                    @input="$emit('input', $event.target.value)">

            <textarea
                    v-else
                    :class="['input',value ? 'active' : '']"
                    :name="name"
                    rows="4"
                    :value="value"
                    @input="$emit('input', $event.target.value)"></textarea>
            <label class="label">{{ text }}</label>
        </div>
        <div v-show="errors.has(name)" class="help is-danger">{{ errors.first(name) }}</div>
    </div>
</template>

<script>
    export default {
        name: "InputTextDefault",

        inject: ['$validator'],

        props: {
            name: {
                default: '',
                type: String
            },
            text: {
                default: '',
                type: String
            },
            value: {
                default: '',
            },
            className: {
                default: '',
                type: String
            },
            idInput: {
                default: '',
                type: String
            },
            required: {
                default: true,
                type: Boolean
            },
            rules: {
                default: '',
                type: String
            },
            typeInput: {
                default: 'text',
                type: String
            },
            inputTextarea: {
                default: false,
                type: Boolean
            },
            preview: {
                default: false,
                type: Boolean
            }
        },

        data() {
            return {
            }
        },

        methods: {
        },

        mounted() {

        }
    }
</script>
