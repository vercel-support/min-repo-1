import { queryField, nonNull } from 'nexus'

export const VerificationRequestFindUniqueQuery = queryField(
  'findUniqueVerificationRequest',
  {
    type: 'VerificationRequest',
    args: {
      where: nonNull('VerificationRequestWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.verificationRequest.findUnique({
        where,
        ...select,
      })
    },
  },
)
