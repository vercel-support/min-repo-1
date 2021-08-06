import { mutationField, nonNull } from 'nexus'

export const TaxStatusDeleteOneMutation = mutationField('deleteOneTaxStatus', {
  type: 'TaxStatus',
  args: {
    where: nonNull('TaxStatusWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.taxStatus.delete({
      where,
      ...select,
    })
  },
})
