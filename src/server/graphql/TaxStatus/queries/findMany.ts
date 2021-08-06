import { queryField, nonNull, list } from 'nexus'

export const TaxStatusFindManyQuery = queryField('findManyTaxStatus', {
  type: nonNull(list(nonNull('TaxStatus'))),
  args: {
    where: 'TaxStatusWhereInput',
    orderBy: list('TaxStatusOrderByInput'),
    cursor: 'TaxStatusWhereUniqueInput',
    distinct: 'TaxStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.taxStatus.findMany({
      ...args,
      ...select,
    })
  },
})
