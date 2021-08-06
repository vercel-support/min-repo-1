import { queryField, nonNull, list } from 'nexus'

export const ServiceTypeFindCountQuery = queryField(
  'findManyServiceTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ServiceTypeWhereInput',
      orderBy: list('ServiceTypeOrderByInput'),
      cursor: 'ServiceTypeWhereUniqueInput',
      distinct: 'ServiceTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.serviceType.count(args as any)
    },
  },
)
