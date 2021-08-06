import { queryField, list } from 'nexus'

export const SalutationAggregateQuery = queryField('aggregateSalutation', {
  type: 'AggregateSalutation',
  args: {
    where: 'SalutationWhereInput',
    orderBy: list('SalutationOrderByInput'),
    cursor: 'SalutationWhereUniqueInput',
    distinct: 'SalutationScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.salutation.aggregate({ ...args, ...select }) as any
  },
})
