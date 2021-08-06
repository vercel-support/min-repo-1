import { queryField, nonNull } from 'nexus'

export const TaxStatusFindUniqueQuery = queryField('findUniqueTaxStatus', {
  type: 'TaxStatus',
  args: {
    where: nonNull('TaxStatusWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.taxStatus.findUnique({
      where,
      ...select,
    })
  },
})
