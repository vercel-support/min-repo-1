import { queryField, list } from 'nexus'

export const IndividualTypeAggregateQuery = queryField(
  'aggregateIndividualType',
  {
    type: 'AggregateIndividualType',
    args: {
      where: 'IndividualTypeWhereInput',
      orderBy: list('IndividualTypeOrderByInput'),
      cursor: 'IndividualTypeWhereUniqueInput',
      distinct: 'IndividualTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.individualType.aggregate({ ...args, ...select }) as any
    },
  },
)
