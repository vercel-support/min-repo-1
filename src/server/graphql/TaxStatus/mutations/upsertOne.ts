import { mutationField, nonNull } from 'nexus'

export const TaxStatusUpsertOneMutation = mutationField('upsertOneTaxStatus', {
  type: nonNull('TaxStatus'),
  args: {
    where: nonNull('TaxStatusWhereUniqueInput'),
    create: nonNull('TaxStatusCreateInput'),
    update: nonNull('TaxStatusUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taxStatus.upsert({
      ...args,
      ...select,
    })
  },
})
