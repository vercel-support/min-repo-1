import { mutationField, nonNull } from 'nexus'

export const TaxStatusCreateOneMutation = mutationField('createOneTaxStatus', {
  type: nonNull('TaxStatus'),
  args: {
    data: nonNull('TaxStatusCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.taxStatus.create({
      data,
      ...select,
    })
  },
})
