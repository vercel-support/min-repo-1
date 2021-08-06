import { mutationField, nonNull } from 'nexus'

export const VerificationRequestDeleteOneMutation = mutationField(
  'deleteOneVerificationRequest',
  {
    type: 'VerificationRequest',
    args: {
      where: nonNull('VerificationRequestWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.verificationRequest.delete({
        where,
        ...select,
      })
    },
  },
)
