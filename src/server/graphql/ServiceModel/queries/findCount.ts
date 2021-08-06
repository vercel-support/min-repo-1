import { queryField, nonNull, list } from 'nexus'

export const ServiceModelFindCountQuery = queryField(
  'findManyServiceModelCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ServiceModelWhereInput',
      orderBy: list('ServiceModelOrderByInput'),
      cursor: 'ServiceModelWhereUniqueInput',
      distinct: 'ServiceModelScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.serviceModel.count(args as any)
    },
  },
)
