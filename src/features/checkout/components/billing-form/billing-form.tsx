'use client'
import OrderSummary from '../order-summary/order-summary'
import { Controller, useForm } from 'react-hook-form'
import { billingSchema, billingSchemaType } from '../../lib/zod/billing.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import ControlledInput from '@/shared/components/controlled-input/controlled-input'
import { useCartStore, useCartTotal } from '@/features/cart/store/cart'
import { CheckoutPayload } from '../../types/types'
import { useCheckout } from '../../hooks/useCheckout'

const BillingForm = () => {
  const { items, updateQty } = useCartStore()
  const { mutate } = useCheckout()
  const { control, handleSubmit } = useForm<billingSchemaType>({
    defaultValues: {
      user_name: '',
      user_last_name: '',
      user_company: '',
      user_address: '',
      user_country: '',
      user_states: '',
      user_zipcode: '',
      user_email: '',
      user_tel: '',
      user_dif_address: false,
      user_notes: '',
      payment_method: 'cash',
    },
    resolver: zodResolver(billingSchema),
  })
  const cartTotal = useCartTotal()
  const onSubmit = async (data: billingSchemaType) => {
    const payload: CheckoutPayload = {
      billing: data,
      items: items.map((item) => ({
        product_id: item.id,
        quantity: item.quantity,
      })),
      total: cartTotal,
    }

    mutate(payload)
  }

  return (
    <form
      id="summary-form"
      onSubmit={handleSubmit(onSubmit)}
      name="billing_form"
      acceptCharset="UTF-8"
    >
      <div className="checkout__form form-checkout">
        <div className="form-checkout__billing">
          <h1 className="title title--small grid-full" data-fls-title="">
            Billing Information
          </h1>

          <ControlledInput
            control={control}
            name="user_name"
            label="First name"
            placeholder="Your first name"
          />
          <ControlledInput
            control={control}
            name="user_last_name"
            label="Last name"
            placeholder="Your last name"
          />
          <ControlledInput
            control={control}
            name="user_company"
            label="Company Name (optional)"
            placeholder="Company name"
          />
          <ControlledInput
            className="grid-full"
            control={control}
            name="user_address"
            label="Street Address"
            placeholder="Your street address"
          />

          <div>
            <div className="form-checkout__title-row">Country / Region</div>
            <Controller
              name="user_country"
              control={control}
              render={({ field }) => (
                <select {...field} id="user_country">
                  <option value="" disabled hidden>
                    Select
                  </option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                  <option value="portugal">Portugal</option>
                </select>
              )}
            />
          </div>
          <div>
            <div className="form-checkout__title-row">States</div>
            <Controller
              name="user_states"
              control={control}
              render={({ field }) => (
                <select {...field} id="user_states">
                  <option value="" disabled hidden>
                    Select
                  </option>
                  <option value="alberta">Alberta</option>
                  <option value="british Columbia">British Columbia</option>
                  <option value="ontario">Ontario</option>
                </select>
              )}
            />
          </div>
          <ControlledInput
            control={control}
            name="user_zipcode"
            label="Zip Code"
            placeholder="Zip Code"
          />
          <ControlledInput
            control={control}
            name="user_zipcode"
            label="Zip Code"
            placeholder="Zip Code"
          />
          <div className="grid-full">
            <div className="grid-half">
              <ControlledInput
                control={control}
                name="user_email"
                label="Email"
                placeholder="Email Address"
              />
              <ControlledInput
                control={control}
                name="user_tel"
                label="Phone"
                placeholder="Phone number"
              />
            </div>
          </div>
          <div className="form-checkout__checkbox grid-full">
            <Controller
              name="user_dif_address"
              defaultValue={false}
              control={control}
              render={({ field }) => (
                <label className="checkbox">
                  <input
                    className="checkbox__input"
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                    id="user_dif_address"
                  />
                  <span className="checkbox__text">
                    Ship to a different address
                  </span>
                </label>
              )}
            />
          </div>
          <h2 className="title title--small grid-full">Additional Info</h2>

          <Controller
            name="user_notes"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <div className="grid-full">
                <label htmlFor="user_notes">Order Notes (Optional)</label>
                <textarea
                  {...field}
                  autoComplete="off"
                  id="user_notes"
                  maxLength={500}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>
              </div>
            )}
          />
        </div>
        <OrderSummary
          control={control}
          items={items}
          updateQty={updateQty}
          cartTotal={cartTotal}
        />
      </div>
    </form>
  )
}

export default BillingForm
