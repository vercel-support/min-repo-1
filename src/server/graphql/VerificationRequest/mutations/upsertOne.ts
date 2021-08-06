import { mutationField, nonNull } from 'nexus'

export const VerificationRequestUpsertOneMutation = mutationField(
  'upsertOneVerificationRequest',
  {
    type: nonNull('VerificationRequest'),
    args: {
      where: nonNull('VerificationRequestWhereUniqueInput'),
      create: nonNull('VerificationRequestCreateInput'),
      update: nonNull('VerificationRequestUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.verificationRequest.upsert({
        ...args,
        ...select,
      })
    },
  },
)
