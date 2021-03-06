import { queryField, nonNull, list } from 'nexus'

export const VerificationRequestFindManyQuery = queryField(
  'findManyVerificationRequest',
  {
    type: nonNull(list(nonNull('VerificationRequest'))),
    args: {
      where: 'VerificationRequestWhereInput',
      orderBy: list('VerificationRequestOrderByInput'),
      cursor: 'VerificationRequestWhereUniqueInput',
      distinct: 'VerificationRequestScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.verificationRequest.findMany({
        ...args,
        ...select,
      })
    },
  },
)
