import { mutationField, nonNull } from 'nexus'

export const TaxStatusUpdateOneMutation = mutationField('updateOneTaxStatus', {
  type: nonNull('TaxStatus'),
  args: {
    where: nonNull('TaxStatusWhereUniqueInput'),
    data: nonNull('TaxStatusUpdateInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.taxStatus.update({
      where,
      data,
      ...select,
    })
  },
})
