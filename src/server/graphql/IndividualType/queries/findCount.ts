import { queryField, nonNull, list } from 'nexus'

export const IndividualTypeFindCountQuery = queryField(
  'findManyIndividualTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'IndividualTypeWhereInput',
      orderBy: list('IndividualTypeOrderByInput'),
      cursor: 'IndividualTypeWhereUniqueInput',
      distinct: 'IndividualTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.individualType.count(args as any)
    },
  },
)
