import { queryField, nonNull, list } from 'nexus'

export const MaritalStatusFindCountQuery = queryField(
  'findManyMaritalStatusCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'MaritalStatusWhereInput',
      orderBy: list('MaritalStatusOrderByInput'),
      cursor: 'MaritalStatusWhereUniqueInput',
      distinct: 'MaritalStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.maritalStatus.count(args as any)
    },
  },
)
