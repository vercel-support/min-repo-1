import { mutationField, nonNull } from 'nexus'

export const VerificationRequestDeleteManyMutation = mutationField(
  'deleteManyVerificationRequest',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'VerificationRequestWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.verificationRequest.deleteMany({ where } as any)
    },
  },
)
