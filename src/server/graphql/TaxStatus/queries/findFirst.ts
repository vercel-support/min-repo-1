import { queryField, list } from 'nexus'

export const TaxStatusFindFirstQuery = queryField('findFirstTaxStatus', {
  type: 'TaxStatus',
  args: {
    where: 'TaxStatusWhereInput',
    orderBy: list('TaxStatusOrderByInput'),
    cursor: 'TaxStatusWhereUniqueInput',
    distinct: 'TaxStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taxStatus.findFirst({
      ...args,
      ...select,
    })
  },
})
