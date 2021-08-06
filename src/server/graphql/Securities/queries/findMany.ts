import { queryField, nonNull, list } from 'nexus'

export const SecuritiesFindManyQuery = queryField('findManySecurities', {
  type: nonNull(list(nonNull('Securities'))),
  args: {
    where: 'SecuritiesWhereInput',
    orderBy: list('SecuritiesOrderByInput'),
    cursor: 'SecuritiesWhereUniqueInput',
    distinct: 'SecuritiesScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.securities.findMany({
      ...args,
      ...select,
    })
  },
})
