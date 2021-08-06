import { queryField, nonNull, list } from 'nexus'

export const IndividualTypeFindManyQuery = queryField(
  'findManyIndividualType',
  {
    type: nonNull(list(nonNull('IndividualType'))),
    args: {
      where: 'IndividualTypeWhereInput',
      orderBy: list('IndividualTypeOrderByInput'),
      cursor: 'IndividualTypeWhereUniqueInput',
      distinct: 'IndividualTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.individualType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
