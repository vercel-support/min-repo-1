import { queryField, list } from 'nexus'

export const MaritalStatusAggregateQuery = queryField(
  'aggregateMaritalStatus',
  {
    type: 'AggregateMaritalStatus',
    args: {
      where: 'MaritalStatusWhereInput',
      orderBy: list('MaritalStatusOrderByInput'),
      cursor: 'MaritalStatusWhereUniqueInput',
      distinct: 'MaritalStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.maritalStatus.aggregate({ ...args, ...select }) as any
    },
  },
)
